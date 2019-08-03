#!/usr/bin/env node
import game from '../game-process';

import logic from '../games/logic-brain-prime';

game.playGame(logic, 3);
