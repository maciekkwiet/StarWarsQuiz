import Logo from '../src/app/components/Logo';

describe('Logo Component', () => {
  describe('ContentRender function', () => {
    document.body.innerHTML = '<div id="logo"></div>';
    const LogoConstructor = new Logo('logo');
    const logoWrapper = document.getElementById('logo');
    const anchor = logoWrapper.querySelector('a')
    const logo = logoWrapper.querySelector('img');
    const pictureSrc = '../static/assets/ui/StarWarsLogo.png';

    describe('Renders logo component', () => {
      it('Container should have class logo', () => {
        expect(logoWrapper.className).toBe('logo');
      })

      it('Should render logo image', () => {
        expect(logo).toBeInstanceOf(HTMLImageElement);
      });

      it('Should have src pointed to the StarWarsLogo.png', () => {
        expect(logo.src.includes('StarWarsLogo.png')).toBeTruthy;
      })

      it('Should have alternative text = Star Wars Logo', () => {
        expect(logo.alt).toBe('Star Wars Logo')
      })
    });
  });
});
