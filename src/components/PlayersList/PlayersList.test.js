import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
            name: "Kunegunda",
            score: 5
        },
        {
            name: "Antos",
            score: 0
        }
    ];
    const playerComponent = shallow(<PlayersList players={players} />);
    //console.log(playerComponent.debug());
    const expectedPlayersNumber = playerComponent.find(Player).length;
    expect(expectedPlayersNumber).toEqual(2);
});

it('trigers a score function', () => {
    const players = [
        {
            name: "Kunegunda",
            score: 5
        },
        {
            name: "Antos",
            score: 0
        }
    ];
    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const firstPlayer = playerComponent.find(Player).at(1);
    const onPlayerScoreChange = firstPlayer.prop("onPlayerScoreChange");
    onPlayerScoreChange(10);
    expect(mockedOnScoreUpdate).toBeCalledWith(1, 10);
});

it('trigers remove player function', () => {
    const players = [
        {
            name: "Kunegunda",
            score: 5
        }
    ];
    const mockOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockOnPlayerRemove} />);

    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerRemove = firstPlayer.prop("onPlayerRemove");
    onPlayerRemove(0);

    expect(mockOnPlayerRemove).toBeCalledWith(0);
});