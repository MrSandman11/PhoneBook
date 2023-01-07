import serviceStorage from './modules/serviceStorage.js';
import * as control from './modules/control.js';
import {renderPhoneBook, renderContacts} from './modules/render.js';

const {getStorage} = serviceStorage;

const {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
} = control;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = getStorage('phonebook');
    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    // Функционал

    const allRow = renderContacts(list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}
