import AddPlayer from "./AddPlayer";
import React from "react";
import { shallow, mount } from "enzyme";

it("renders without crashing - AddPlayer", () => {
  shallow(<AddPlayer />);
});

it("should triger onPlayerAdd function", () => {
  const onPlayerAdd = jest.fn();
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  const nameInput = addPlayerComponent.find("input").first().getDOMNode();
  nameInput.value = "Ania";
  const form = addPlayerComponent.find("form");
  form.simulate("submit");
  expect(onPlayerAdd).toBeCalledWith("Ania");
});