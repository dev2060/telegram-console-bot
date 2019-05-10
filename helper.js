'use strict';

/**
 * Helper
 */
module.exports = {
  formatNumber(x) {
    return x.toLocaleString('en');
  },
  parseCommand(message) {
    const tokens = message.split(' ');
    if (!tokens[0].match(/^\//)) {
      return null;
    }
    const command = [];
    const cmd = tokens.shift();
    const match = cmd.match(/\/(\w*)/);
    if (match.length > 0) {
      command[match[1]] = tokens;
    }
    return command;
  },
  getMessage(message) {
    let m = '';
    if (message) {
      m = message.toString().trim();
    } else {
      m = '';
    }
    return (m.length > 0 ? m : 'N/A');
  },
  formatSimpleMessage(title, description, details_) {
    let message = '';

    if (title.length > 0) {
      message = `<strong>${title}</strong>\n`;
    }
    if (description.length > 0) {
      message += `<pre>${description}</pre>\n`;
    }
    if (details_.length > 0) {
      message += `<a href="${details_}">${details_}</a>\n`;
    }

    return message;
  },
  formatMessage(title, description, fields) {
    let message = '';

    if (title.length > 0) {
      message = `<strong>${title}</strong>\n`;
    }
    if (description.length > 0) {
      message += `<em>${description}</em>\n`;
    }
    if (fields.length > 0) {
      message += `<pre>${this.parseFields(fields)}</pre>`;
    }

    return message;
  },
  parseFields(fields) {
    const data = [];
    fields.forEach((entry) => {
      if (entry.title && entry.title.length > 0) {
        data.push(`${entry.title}: ${entry.value}`);
      }
    });

    return data.join("\n"); // eslint-disable-line quotes
  },
  validateEmail(email){
    const matcher = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return matcher.test(String(email).toLowerCase());
  },
  validateIp(ip) {
    const matcher = /^(?:(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)$/;
    return matcher.test(ip);
  },
};
