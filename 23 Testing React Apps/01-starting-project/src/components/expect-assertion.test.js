const React = require("react");
const ReactDOM = require("react-dom");
const renderer = require("react-dom-renderer");

const can = {
  name: "pamplemousse",
  ounces: 12,
};

const can1 = {
  flavor: "grapefruit",
  ounces: 12,
};
const can2 = {
  flavor: "grapefruit",
  ounces: 12,
};

test("toBe", () => {
  // similar to Object.is or ===
  expect(1).toBe(1);
  expect(can.ounces).toBe(12);
  expect(can.name).toBe("pamplemousse");
  expect(true).toBe(true);
  expect({}).not.toBe({});
  expect(can1).not.toBe(can2);
});

test("toEqual", () => {
  // similar to Lodash _.isEqual() Method performs a deep comparison
  expect(can1).toEqual(can2);

  const subject = { a: { b: "c" }, d: "e" };
  const actual = { a: { b: "c" }, d: "e" };
  expect(subject).toEqual(actual);

  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4];
  expect(arr1).toEqual(arr2);
});

test("toMatchObject", () => {
  // similar to `toEqual`, but for partial equality
  const subject = { a: { b: "c" }, d: "e" };
  const actual = { a: { b: "c" } };
  expect(subject).toMatchObject(actual);

  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3];
  expect(arr1).not.toMatchObject(arr2);

  const subArray = [1, 2, { three: "four", five: { six: 7 } }];
  const actArray = [1, 2, { five: { six: 7 } }];
  expect(subArray).toMatchObject(actArray);

  const arr3 = [1, 2, 3, 4];
  const arr4 = [1, 2];
  expect({ ...arr3 }).toMatchObject({ ...arr4 });

  expect([{ foo: "bar" }, { baz: 1, extra: "quux" }]).toMatchObject([
    { foo: "bar" },
    { baz: 1 },
  ]);
});

test("toHaveBeenCalledTimes", () => {
  const mockFn = jest.fn();
  expect(mockFn).toHaveBeenCalledTimes(0);

  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("toHaveBeenCalledWith", () => {
  const mockFn = jest.fn();
  mockFn("abc", { oneTwoThree: 123 });
  // NOTE: uses toEqual (not toBe) on each arguments
  expect(mockFn).toHaveBeenCalledWith("abc", { oneTwoThree: 123 });
});

test("toBeGreaterThan", () => {
  expect(10).toBeGreaterThan(3);
  expect(10).not.toBeGreaterThan(10);
  expect(10).toBeGreaterThanOrEqual(10);
});

test("toBeFalsy/Truthy", () => {
  expect(false).toBeFalsy();
  expect(true).toBeTruthy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test("toEqual, toMatchObject, and toHaveBeenCalledWith matching a schema", () => {
  const birthday = {
    day: 18,
    month: 10,
    year: 1988,
    meta: { display: "Oct 18th, 1988" },
  };

  const schema = {
    day: expect.any(Number),
    month: expect.any(Number),
    year: expect.any(Number),
    meta: { display: expect.stringContaining("1988") },
  };
  expect(birthday).toEqual(schema);

  // There is also expect.arrayContaining, or expect.objectContaining
});

test("mock functions", () => {
  const myFn = jest.fn();
  myFn("first", { second: "val" });

  const calls = myFn.mock.calls;
  const firstCall = calls[0];
  const firstArg = firstCall[0];
  const secondArg = firstCall[1];
  // could also do this in a single line
  // cosnt [[firstArg, secondArg]] = myFn.mock.calls

  expect(firstArg).toBe("first");
  expect(secondArg).toEqual({ second: "val" });
});
