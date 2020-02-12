// ==UserScript==
// @name Skip CurseForge Countdown
// @namespace http://tampermonkey.net/
// @version 0.2
// @description Skip the download countdown when downloading Minecraft mods from CurseForge.
// @author Brittank88
// @copyright 2020+, Brittank88
// @homepage https://github.com/Brittank88/Skip-CurseForge-Countdown
// @downloadURL https://github.com/Brittank88/Skip-CurseForge-Countdown/blob/master/SCC-Userscript.js
// @supportURL https://github.com/Brittank88/Skip-CurseForge-Countdown/issues
// @match https://www.curseforge.com/minecraft/mc-mods/*
// @match https://www.curseforge.com/minecraft/mc-mods/*/files
// @match https://www.curseforge.com/minecraft/mc-mods/*/files/*
// @match https://www.curseforge.com/minecraft/modpacks/*
// @match https://www.curseforge.com/minecraft/modpacks/*/files
// @match https://www.curseforge.com/minecraft/modpacks/*/files/*
// @match https://www.curseforge.com/minecraft/mc-addons/*
// @match https://www.curseforge.com/minecraft/mc-addons/*/files
// @match https://www.curseforge.com/minecraft/mc-addons/*/files/*
// @match https://www.curseforge.com/minecraft/customization/*
// @match https://www.curseforge.com/minecraft/customization/*/files
// @match https://www.curseforge.com/minecraft/customization/*/files/*
// @match https://www.curseforge.com/minecraft/bukkit-plugins/*
// @match https://www.curseforge.com/minecraft/bukkit-plugins/*/files
// @match https://www.curseforge.com/minecraft/bukkit-plugins/*/files/*
// @match https://www.curseforge.com/minecraft/texture-packs/*
// @match https://www.curseforge.com/minecraft/texture-packs/*/files
// @match https://www.curseforge.com/minecraft/texture-packs/*/files/*
// @match https://www.curseforge.com/minecraft/worlds/*
// @match https://www.curseforge.com/minecraft/worlds/*/files
// @match https://www.curseforge.com/minecraft/worlds/*/files/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    // Get the reference to JQuery.
    var $ = window.jQuery;

    // For each a element containing a href that is clearly a download link for the file, append '/file' to the end (as this is the direct link).
    $(`a[href^="${window.location.pathname.split('/files')[0]}/download"]`).each(function() {
        this.href = this.href.includes('?') ? this.href.split('?')[0] + '/file' : this.href + '/file';
    });
})()