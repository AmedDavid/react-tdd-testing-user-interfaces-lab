import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

//the following tests are for the App component

// Test for the top-level heading
test("displays a top-level heading with the text `Hi, I'm David`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});




// Test for the image with alt text
test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of me/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

// Test for the second-level heading
test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

// Test for the biography paragraph
test("displays a paragraph for the biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a/i);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph.tagName.toLowerCase()).toBe("p");
});

// Test for the GitHub link
test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/AmedDavid");
});



// Test for the LinkedIn link
test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/ameditechwizard/");
});