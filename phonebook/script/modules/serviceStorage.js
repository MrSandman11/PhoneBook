const getStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

const setStorage = (key, contact) => {
  const data = getStorage(key);
  data.push(contact);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = (phone) => {
  const data = getStorage('phonebook');
  const newData = data.filter(item => item.phone !== phone);
  localStorage.setItem('phonebook', JSON.stringify(newData));
};

export default {
  getStorage,
  setStorage,
  removeStorage,
};
