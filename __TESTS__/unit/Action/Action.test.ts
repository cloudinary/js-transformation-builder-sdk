import {Action} from '../../../src/internal/Action';
import {Qualifier} from '../../../src/internal/qualifier/Qualifier';
import {QualifierValue} from "../../../src/internal/qualifier/QualifierValue";
import {FlagQualifier} from "../../../src/qualifiers/flag/FlagQualifier";
import {Transformation} from "../../../src";


describe('Tests for Transformation Action', () => {
  it('Creates a transformation with new action while passing a qualifier to addQualifier()', () => {
    const action = new Action().addQualifier(new Qualifier('a', 90));
    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('a_90');
  });
  it('Creates a transformation with new action while passing an array to addQualifier()', () => {
    const action = new Action().addQualifier(new Qualifier('a', new QualifierValue([90, 80]).setDelimiter('.')));

    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('a_90.80');
  });
  it('Creates a transformation with new action using addValue()', () => {
    const action = new Action().addQualifier(new Qualifier('a', new QualifierValue([90, 80]).setDelimiter('.')).addValue(70));

    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('a_90.80.70');
  });
  it('Creates a transformation with new action while calling addQualifier twice', () => {
    const action = new Action()
      .addQualifier(new Qualifier('w', 100))
      .addQualifier(new Qualifier('c', 'fill'));

    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('c_fill,w_100');
  });
  it('Creates a transformation with new action, overwriting existing qualifier', () => {
    const action = new Action()
      .addQualifier(new Qualifier('w', 100))
      .addQualifier(new Qualifier('w', 200));

    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('w_200');
  });

  it('Creates a transformation with new action while adding a single flag', () => {
    const action = new Action()
      .addQualifier(new Qualifier('l', 'sample'))
      .addFlag(new FlagQualifier('layer_apply'));

    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('fl_layer_apply,l_sample');
  });

  it('Creates a transformation with new action while adding multiple flags', () => {
    const action = new Action()
      .addQualifier(new Qualifier('l', 'sample'))
      .addFlag(new FlagQualifier('first_flag'))
      .addFlag(new FlagQualifier('second_flag'));

    const tx = new Transformation()
      .addAction(action)
      .toString();

    expect(tx).toBe('fl_first_flag,fl_second_flag,l_sample');
  });

  it('Correctly sorts qualifiers', () => {
    const action = new Action()
      .addQualifier(new Qualifier('b', '2'))
      .addFlag(new FlagQualifier('a'))
      .addQualifier(new Qualifier('a', '1'))
      .addFlag(new FlagQualifier('b'))
      .addQualifier(new Qualifier('c', '3'));

    expect(action.toString()).toBe('a_1,b_2,c_3,fl_a,fl_b');
  });

  it('Add and read actions tags', () => {
    const action = new Action()
      .setActionTag('testing');

    expect(action.getActionTag()).toBe('testing');
  });
});
