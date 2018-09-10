const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const analizer = array => array.filter(word => word.match(regex)).map(urlDirty => {
  const [url] = urlDirty.match(/http(.*):(.*)[a-z]/g, '');
  return url;
});

module.exports = analizer;
