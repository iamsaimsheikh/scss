import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Form from "./components/Form";

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  test("Check Form Submission If Given Name is correct", () => {
    wrapper.find("#submit").simulate("click");
    expect(wrapper.find("#name").text()).toBe("");
  });

  test("Check Form Submission If Surname is correct ", () => {
    wrapper.find("#submit").simulate("click");
    expect(wrapper.find("#surname").text()).toBe("");
  });

  test("Check Form Submission If email is correct ", () => {
    wrapper.find("#submit").simulate("click");
    expect(wrapper.find("#email").text()).toBe("");
  });

  test("Check Form Submission If passport is correct ", () => {
    wrapper.find("#submit").simulate("click");
    expect(wrapper.find("#passport").text()).toBe("");
  });

  test("Check Form Submission If password is correct ", () => {
    wrapper.find("#submit").simulate("click");
    expect(wrapper.find("#password").text()).toBe("");
  });
});
