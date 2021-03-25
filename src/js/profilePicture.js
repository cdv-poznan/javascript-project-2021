const profilePicture = () => {
  const input = document.querySelector('.userData__photoInput');

  document
    .querySelector('.userData__photoButton')
    .addEventListener('click', function () {
      input.click();
    });
  function preview() {
    const fileObject = this.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileObject);
    fileReader.onload = function () {
      const result = fileReader.result;
      const img = document.querySelector('.userData__photo');
      const imgprofile = document.querySelector('.userData__profilePicture');
      img.setAttribute('src', result);
      imgprofile.setAttribute('src', result);
    };
  }
  input.addEventListener('change', preview);
};
export default profilePicture;
