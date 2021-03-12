import React from 'react';
import {
    VerticalCard1,
    getCssClassNames,
} from '../../../src/components/card/VerticalCard1';
import { render, fireEvent } from '@testing-library/react';

describe('VerticalCard1', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <VerticalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                title="This is the title"
                href="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(container.querySelector('[href]').getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <VerticalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                title="This is the title"
                href="https://example.com/1/This is the title"
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
