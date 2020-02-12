// ==UserScript==
// @name         Skip CurseForge Countdown
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip the download countdown when downloading Minecraft mods from CurseForge.
// @author       Brittank88
// @copyright    2020+, Brittank88
// @updateURL    https://raw.githubusercontent.com/Brittank88/Skip-CurseForge-Countdown/master/SCC-Userscript.js
// @downloadURL  https://raw.githubusercontent.com/Brittank88/Skip-CurseForge-Countdown/master/SCC-Userscript.js
// @supportURL   https://github.com/Brittank88/Skip-CurseForge-Countdown/issues
// @match        https://www.curseforge.com/minecraft/mc-mods/*
// @match        https://www.curseforge.com/minecraft/mc-mods/*/files
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    // Get the reference to JQuery.
    var $ = window.jQuery;

    // For each a element containing a href that is clearly a download link for the file, append '/file' to the end (as this is the direct link).
    $(`a[href^="${window.location.pathname.replace('/files', '')}/download"]`).each(function() {
        this.href = this.href.includes('?') ? this.href.split('?')[0] + '/file' : this.href + '/file';
    });
})()