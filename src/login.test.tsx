
import { Login } from './login';
import { LoginService } from './services/LoginService';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { fireEvent, queryByText } from '@testing-library/react';


describe('Login component tests', () => {

    let container: HTMLDivElement
    const loginServiceSpy = jest.spyOn(LoginService.prototype, 'login');

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Login />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].name).toBe('login');
        expect(inputs[1].name).toBe('password');
        expect(inputs[2].value).toBe('Login');

        const label = container.querySelector('label');
        expect(label).not.toBeInTheDocument();

    });

    it('Renders correctly initial document with data-test query', () => {
        expect(container.querySelector("[data-test='login-form']")).toBeInTheDocument();
        expect(container.querySelector("[data-test='login-input']")?.getAttribute('name'))
            .toBe('login');
        expect(container.querySelector("[data-test='password-input']")?.getAttribute('name'))
            .toBe('password');
    });



})