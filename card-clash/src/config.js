// src/config.js
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import PreloadScene from './scenes/PreloadScene';
import MainMenuScene from './scenes/MainMenuScene';
import GameScene from './scenes/GameScene';

export default {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#333333',
    parent: 'game-container',
    scene: [BootScene, PreloadScene, MainMenuScene, GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};