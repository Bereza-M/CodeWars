const rps = (p1, p2) => {
    let greeting1 = 'Player 1 won!';
    let greeting2 = 'Player 2 won!';

    if (p1 === 'rock' && p2 === 'scissors') return greeting1;
    if (p1 === 'scissors' && p2 === 'rock') return greeting2;
    
    if (p1 === 'paper' && p2 === 'scissors') return greeting2;
    if (p1 === 'scissors' && p2 === 'paper') return greeting1;

    if (p1 === 'paper' && p2 === 'rock') return greeting1;
    if (p1 === 'rock' && p2 === 'paper') return greeting2;

    if (p1 === p2) return 'Draw!';
};