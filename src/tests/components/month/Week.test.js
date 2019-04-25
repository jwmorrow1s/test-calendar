import React from 'react';
import Week from "../../../components/week/Week";

test('displayDays() creates 7 days', () => {
    const week = new Week();
    const expected = [<div key={0}>Day</div>,<div key={1}>Day</div>,<div key={2}>Day</div>,<div key={3}>Day</div>,<div key={4}>Day</div>,<div key={5}>Day</div>,<div key={6}>Day</div>,]
    const actual = week.displayDays();
    expect(actual).toEqual(expected);
});