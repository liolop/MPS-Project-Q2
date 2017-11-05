// Auto-generated from simulator. Do not edit.
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
declare namespace intersection {
    /**
     * @param loc location index of intersections
     */
    //% block="On intersection %loc" blockId=on_inter
    //% blockGap=8 weight=54
    //% shim=intersection::onInter
    function onInter(loc: InterLocation, body: () => void): void;

    /**
     * @param dir direction of the traffic light
     */
    //% block="go %dir" blockId=set_TL_dir
    //% shim=intersection::setTLDir
    function setTLDir(dir: TLDir): void;

}

// Auto-generated. Do not edit. Really.
