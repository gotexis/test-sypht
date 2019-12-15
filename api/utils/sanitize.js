import _ from 'lodash'

export const replaceDotWithUnderscore = obj => {
  _.forOwn(obj, (value, key) => {

    // if key has a period, replace all occurences with an underscore
    if (_.includes(key, '.')) {
      const cleanKey = _.replace(key, /\./g, '_');
      obj[cleanKey] = value;
      delete obj[key];
    }

    // continue recursively looping through if we have an object or array
    if (_.isObject(value)) {
      return replaceDotWithUnderscore(value);
    }
  });
  return obj;
};
