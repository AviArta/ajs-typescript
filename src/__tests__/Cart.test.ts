import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add item Movie to card', () => {
  const cart = new Cart();
  const movie = new Movie(909, "Мстители", 299, 2012, "USA", ["фантастика", "боевик", "фэнтези"], 137, "The Avengers", "Evengers Assemble!");
  cart.add(movie);
  expect(cart.items.length).toBe(1);
  expect(cart.items).toEqual([movie]);
});
