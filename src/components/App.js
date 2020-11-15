import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';

import '../index.css';

function App() {

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_is-opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-place').classList.add('popup_is-opened');
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_is-opened');
  }

  return (
    <div className="App">

      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>

    </div >
  );
}

export default App;
