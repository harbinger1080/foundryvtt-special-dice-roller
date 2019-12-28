# L5R Roller

[![Build Status](https://travis-ci.org/BernhardPosselt/l5r-foundryvtt-roller.svg?branch=master)](https://travis-ci.org/BernhardPosselt/l5r-foundryvtt-roller)

A Legend of the 5 Rings dice roller using the images from [SkyJedi's Discord Roller](https://github.com/SkyJedi/FFGNDS-Discord-Dice-Roller)

Also supports Genesys and Fantasy Flight Games Star Wars RPG

# Usage

You can roll a system by starting your message with the following string:

* Legend of the 5 Rings: /l5r
* FFG Star Wars: /sw
* FFG Genesys: /gen

Then supply a dice formula separated with a space. The formula consists of dice letters that are optionally prefixed with a number.

A full roll example would be **/l5r rrs** or **/l5r 2rs**.

## Usage L5R

Roll Legend of the 5 Rings 5th edition dice in the chat window. Auto rolls exploding successes and let's you keep/re-roll selected dice.

Use the **/l5r** command using the following dice letters:

* r, b: ring
* s, w: skill

![roller usage](docs/l5rroll.png)

You can choose to either keep or re-roll certain dice. To do that, click on the dice to select them and hit either button. Re-rolled dice are removed from the roll and new rolls are attached at the end.

## Usage Genesys/Star Wars

Usage is similar to L5R but re-rolls and keeping dice is unsupported. Use the **/gen** or **/sw** commands using the following dice letters:

* b: boost
* s: setback
* a: ability
* d: difficulty
* p: proficiency
* c: challenge
* f: force (sw only)

![roller usage](docs/genroll.png)
