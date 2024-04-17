const esmayuscula = require('../utils/esmayuscula');
test("Comprobar si es no mayuscula", () => {
    expect(esmayuscula("madrid")).toBe(false);
})

