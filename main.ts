/**
 * Ajouts pour Neopixel - PAC Techno
 */
//% weight=30 color=#431c75 icon="" block="Extras pour Neopixel"
//% groups=['others', 'Animations']
namespace PAC_Neopixel {

    /**
     * Afficher un pixel qui rebondit d'un bout Ã  l'autre du ruban de DEL (1 cycle). La commande show() n'est pas nÃ©cessaire. 
     * @param neoStrip neopixel Strip object
     * @param rgb RGB color of the bouncing LED
     */
    //% weight=85 blockGap=8
    //% group="Animations"
    //% block="Cylon sur %neoStrip=variables_get(strip)|de couleur : %rgb=neopixel_colors|et vitesse %v=number"
    export function cylon(neoStrip: neopixel.Strip, rgb: number, v: number) {
        rgb = rgb >> 0;

        // allumer le premier pixel
        neoStrip.setPixelColor(0, rgb);
        neoStrip.show();
        basic.pause(v);

        for (let i = 0; i < neoStrip.length(); i++) {
            neoStrip.setPixelColor(i - 1, 0);
            neoStrip.setPixelColor(i, rgb);
            neoStrip.show();
            basic.pause(v);
        }
        for (let i = neoStrip.length() - 2; i > 0; i--) {
            neoStrip.setPixelColor(i + 1, 0);
            neoStrip.setPixelColor(i, rgb);
            neoStrip.show();
            basic.pause(v);
        }
        neoStrip.setPixelColor(1, 0);
        neoStrip.show();

    }


    /**
    * Faire clignoter toutes les DEL d'un ruban 
    * @param rgb RGB color of the LED
    */
    //% block="%neoStrip=variables_get(strip)| clignoter : %rgb=neopixel_colors" 
    //% weight=85 blockGap=8
    //% group="Animations"
    export function blink(neoStrip: neopixel.Strip, rgb: number) {
        rgb = rgb >> 0;
        neoStrip.showColor(neopixel.colors(NeoPixelColors.Blue))
        neoStrip.show();
    }

}

