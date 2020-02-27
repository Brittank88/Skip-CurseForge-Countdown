// ==UserScript==
// @name         Skip CurseForge Countdown
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Skip the download countdown when downloading Minecraft mods from CurseForge.
// @author       Brittank88
// @copyright    2020+, Brittank88
// @homepage     https://github.com/Brittank88/Skip-CurseForge-Countdown
// @downloadURL  https://raw.githubusercontent.com/Brittank88/Skip-CurseForge-Countdown/master/SCC-Userscript.js
// @supportURL   https://github.com/Brittank88/Skip-CurseForge-Countdown/issues
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://www.curseforge.com/minecraft/*/*
// @match        https://www.curseforge.com/minecraft/*/*/*
// @match        https://www.curseforge.com/minecraft/*/*/*/*
// ==/UserScript==

(function () {
    'use strict';
    // Get the reference to JQuery.
    var $ = window.jQuery;

    // For each a element containing a href that is clearly a download link for the file, append '/file' to the end (as this is the direct link).
    $(`a[href^="${window.location.pathname.split('/files')[0]}/download"]`).each(function () {
        this.href = this.href.includes('?') ? this.href.split('?')[0] + '/file' : this.href + '/file';
    });
})()