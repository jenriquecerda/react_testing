import React from "react";
import SlideViewer from "../src/SlideViewer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const slides = [
  { name: "cow", filename: "cow.jpg" },
  { name: "elephant", filename: "elephant.jpg" },
  { name: "lion", filename: "lion.jpg" },
  { name: "table", filename: "table.jpg" },
];

describe("SlideViewer", () => {
  it("renders a SlideViewer", () => {
    render(<SlideViewer />);

    expect(screen.getByText("No Slides")).toBeTruthy();
  });

  it("renders 'No Slide' when empty list passed on", () => {
    render(<SlideViewer slides={[]} />);

    expect(screen.getByText("No Slides")).toBeTruthy();
  });

  it("displays first slide if slides get passed", () => {
    render(<SlideViewer slides={slides} />);

    expect(screen.getByAltText(slides[0].name)).toBeTruthy();
    expect(screen.getByText(slides[0].name)).toBeTruthy();
  });

  it("displays next slide when Next gets clicked", () => {
    render(<SlideViewer slides={slides} />);

    clickOn("Next");

    expect(screen.getByAltText(slides[1].name)).toBeTruthy();
    expect(screen.getByText(slides[1].name)).toBeTruthy();
  });

  it("displays previous slide when Previous gets clicked", () => {
    render(<SlideViewer slides={slides} />);

    clickOn("Next");
    expect(screen.getByAltText(slides[1].name)).toBeTruthy();

    clickOn("Previous");
    expect(screen.getByAltText(slides[0].name)).toBeTruthy();
    expect(screen.getByText(slides[0].name)).toBeTruthy();
  });

  it("does not display Previous button when index is '0'", () => {
    render(<SlideViewer slides={slides} />);

    expect(screen.getByAltText(slides[0].name)).toBeTruthy();
    expect(screen.getByText(slides[0].name)).toBeTruthy();

    expect(findButton("Previous")).not.toBeInTheDocument();
  });

  it("does not display Next button when last index showing", () => {
    render(<SlideViewer slides={slides} />);

    for (let i = 0; i < slides.length - 1; i++) {
      clickOn("Next");
    }

    expect(screen.getByAltText(slides[3].name)).toBeTruthy();
    expect(screen.getByText(slides[3].name)).toBeTruthy();

    expect(findButton("Next")).not.toBeInTheDocument();
  });
});

const findButton = (btnName) => screen.queryByRole("button", { name: btnName });

const clickOn = (btnName) => userEvent.click(findButton(btnName));
