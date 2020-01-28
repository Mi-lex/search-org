import React from 'react';
import SuggestionList from './SuggestionList.module.css';

interface Suggestion {
    title: string;
    inn: number;
    address: string;
}

const mockData: Suggestion[] = [
    {
        title: 'ViniPuh',
        inn: 1234515144,
        address: 'Kirovski Zavod',
    },
    {
        title: 'Zebra',
        inn: 23598666,
        address: 'Novocherkasskaya',
    },
    {
        title: 'Donkey',
        inn: 782834234,
        address: 'Academicheskaya',
    },
];

const SuggestionList = (): JSX.Element => {
    return (
        <ul className={classes[list]}>
            {mockData.map(suggestion => (
                <li key={suggestion.inn}>
                    <section className="item">
                        <h3>{suggestion.title}</h3>
                        <p className="inn">{suggestion.inn}</p>
                        <p className="address">{suggestion.address}</p>
                    </section>
                </li>
            ))}
        </ul>
    );
};
