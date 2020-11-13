import axios from "axios";
import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  SET_DEFAULT_PAGE,
  SET_COUNT,
  SET_IS_LOADING,
} from "./types";

import _ from "lodash";
import config from "../config";

export const getCharacters = (page = 1) => async (dispatch) => {
  try {
    dispatch({
      type: SET_IS_LOADING,
      isLoading: true,
    });
    const { data } = await axios.get(
      `${config.BASE_URL}/api/character/?page=${page}`
    );

    const characters = await extendCharacters(data.results);
    const { count, next, pages } = data.info;
    dispatch({
      type: SET_COUNT,
      count: pages,
    });
    dispatch({
      type: SET_DEFAULT_PAGE,
      defaultPage: page,
    });
    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    });
    dispatch({
      type: SET_IS_LOADING,
      isLoading: false,
    });
  } catch (err) {
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: err,
    });
  }
};

export const setDefaultPage = (page) => async (dispatch) => {
  dispatch({
    type: SET_DEFAULT_PAGE,
    defaultPage: page,
  });
  await getCharacters(page)(dispatch);
};

export const setIsLoading = (bool) => async (dispatch) => {
  dispatch({
    type: SET_IS_LOADING,
    isLoading: bool,
  });
};

/**
 * @description extends characters with Location and Episodes
 * @param {Array} characters
 * @returns {Array}
 */
const extendCharacters = async (characters) => {
  await Promise.all(
    characters.map(async (character) => {
      if (character.location) character = await extendWithLocation(character);
      if (character.episode) character = await extendWithEpisodes(character);
      return character;
    })
  );
  return characters;
};

/**
 * @description extends characters with Location Object
 * @param {Object} character
 * @returns {Object}
 */
const extendWithLocation = async (character) => {
  character.locationExt = _.get(
    await axios.get(character.location.url),
    "data"
  );
  return character;
};

/**
 * @description extends character with Episodes Object Array
 * @param {Object} character
 * @returns {Object}
 */
const extendWithEpisodes = async (character) => {
  character.episodesExt = [];
  await Promise.all(
    character.episode.map(async (episode) => {
      character.episodesExt.push(_.get(await axios.get(episode), "data"));
      return character;
    })
  );
  character.episodesExt.sort((a, b) => a.id - b.id);
  return character;
};
