'use strict';

/**
 * Requires
 */
const rp = require('request-promise');
const moment = require('moment');

const config = require('./api_server_config');
const helper = require('./helper');

/**
 * Commands
 */
module.exports = {
  /**
   * Fake a error promise
   *
   * @param {string} error Error Message
   *
   * @return {object} Rejected Request Promise
   */
  error(error) {
    return Promise.reject(new Error(error));
  },


  /**
   * Stats
   *
   * @param {object} commandArguments: None
   *
   * @return {object} Request promise
   */
  stats() {
    return rp({
      uri: `${config.consoleRestApi}/stats`,
      json: true,
    }).then((body) => {
      // Variables

      return helper.formatSimpleMessage('My Game Statistics:', 
        'This is still under development, but we have some kittens for you instead:',
        'https://twitter.com/CuteBabyAnimals/status/1053148721570070528');
    });
    
  },
  help() {
    return rp({
      uri: `${config.consoleRestApi}/stats`,
      json: true,
    }).then((body) => {

      return helper.formatSimpleMessage('To make your working process fabulous, use magic words below:', 'Wingardium Leviosa', '');
    });
    
  },
  start() {
    return rp({
      uri: `${config.consoleRestApi}/stats`,
      json: true,
    }).then((body) => {

      return helper.formatSimpleMessage('Weclome to CoNS()LE Application.', 
        'CoNS()LE purpose is to bring gamification and fun into working process. Please register in tournament by typing "/register jira_email@google.com"',
        '');
    });
    
  },
  register(commandArguments) {
    const email = commandArguments[0] || 'wrongemail';
    // Validate Email Address
    if (!helper.validateEmail(email)) {
      return this.error('Wrong Email');
    }
    else {


      return rp({
        uri: `${config.consoleRestApi}/stats`,
        json: true,
      }).then((body) => {

        return helper.formatSimpleMessage('Game Registration. You succesfully started your journey!', 
          'This is still under development, but we have some pups for you instead:',
          'https://twitter.com/CuteBabyAnimals/status/1053320838097854466');
      });      
    }

    
  },

  dashboard() {
    return rp({
      uri: `${config.consoleRestApi}/stats`,
      json: true,
    }).then((body) => {
      // Variables
      const northPsi = parseInt(body.items[0].readings.pm25_one_hourly.north, 10);

      return helper.formatSimpleMessage('Game dashboard', 'This is still under development, but soon it will be your favourite place', '');
    });
  },



};
