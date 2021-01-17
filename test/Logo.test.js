import Logo from '../src/app/components/Logo';

describe('Logo Component', () => {
  describe('ContentRender function', () => {
    describe('Renders logo component', () => {
      document.body.innerHTML = '<div id="logo"></div>';
      const LogoConstructor = new Logo('logo');
      const logoWrapper = document.getElementById('logo');
      const logo = logoWrapper.querySelector('img');

      it('Should render logo comoponent', () => {
        expect(logo).toBeInstanceOf(HTMLImageElement);
      });
    });
  });
});
