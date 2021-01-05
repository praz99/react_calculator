import calculate from '../logic/calculate';
import Big from 'big.js';

test('AC button', () => {
  const calcObj = { total: '1', next: '2', operation: '+' };
  expect(calculate(calcObj, 'AC')).toEqual({ total: null, next: null, operation: null });
});

test('= button with total, next and operation given', () => {
  const calcObj = { total: '10', next: '11', operation: 'x' };
  expect(calculate(calcObj, '=')).toEqual({ total: Big(110), next: null, operation: null });
});

test('% button with only total given', () => {
  const calcObj = { total: '10', next: null, operation: null };
  expect(calculate(calcObj, '%')).toEqual({ total: Big(0.1), next: null, operation: null });
});

test('total, next and operation given', () => {
  const calcObj = { total: '10', next: '2', operation: '÷' };
  expect(calculate(calcObj, '÷')).toEqual({ total: Big(5), next: null, operation: '÷' });
});

test('next is given without operation', () => {
  const calcObj = { total: '10', next: '2', operation: null };
  expect(calculate(calcObj, '-')).toEqual({ total: '2', next: null, operation: '-' });
});

test('only operation given', () => {
  const calcObj = { total: null, next: null, operation: null };
  expect(calculate(calcObj, 'x')).toEqual({ total: null, next: null, operation: 'x' });
});

test('+/- button with next given', () => {
  const calcObj = { total: null, next: '7', operation: null };
  expect(calculate(calcObj, '+/-')).toEqual({ total: null, next: Big(-7), operation: null });
});

test('+/- button with total given', () => {
  const calcObj = { total: '10', next: null, operation: null };
  expect(calculate(calcObj, '+/-')).toEqual({ total: Big(-10), next: null, operation: null });
});

test('only total is given', () => {
  const calcObj = { total: '100', next: null, operation: null };
  expect(calculate(calcObj, '9')).toEqual({ total: null, next: '9', operation: null });
});

test('only next is given', () => {
  const calcObj = { total: null, next: '7', operation: null };
  expect(calculate(calcObj, '3')).toEqual({ total: null, next: '73', operation: null });
});

test('no total, next and operation given', () => {
  const calcObj = { total: null, next: null, operation: null };
  expect(calculate(calcObj, '23')).toEqual({ total: null, next: '23', operation: null });
});
