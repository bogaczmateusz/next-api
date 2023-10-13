import { screen, render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import ReduxTest from "../ReduxTest"

describe("ReduxTest Component", () => {
  it("should have input to provide value to change initial redux test value", () => {
    render(
      <Provider store={store}>
        <ReduxTest />
      </Provider>
    )
    const element = screen.getByPlaceholderText("Type new Redux value")
    expect(element).toBeInTheDocument()
  })

  it("should hava a button", () => {
    render(
      <Provider store={store}>
        <ReduxTest />
      </Provider>
    )
    const element = screen.getByText("Set redux value")
    expect(element).toBeInTheDocument()
  })
})
