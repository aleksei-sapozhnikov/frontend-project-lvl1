#!/usr/bin/env node
import game from '../game-process';

import logic from '../games/logic-brain-gcd';

game.playGame(logic, 3);
