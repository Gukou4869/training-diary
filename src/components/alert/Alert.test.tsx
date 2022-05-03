import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as stories from "./Alert.stories";

const { Error, Success } = composeStories(stories);

// test file の拡張子は.tsxで！

describe("Alert Component Test", () => {
    test("Error alert should have red background color", async () => {
        render(<Error />);
        expect(screen.getByText("エラー")).toHaveStyle(`backgroundColor:"#ff1d25"`);
    });

    test("Diabled Button shoulld have disabled attribute initially", () => {
        render(<Success />);
        expect(screen.getByText("成功")).toHaveStyle(`backgroundColor:"#7ac943"`);
    });
});
