let aktualis_nap = ""
let napok = "hetfo,kedd,szerda,csutortok,pentek,szombat,vasarnap"
let het_napjai = napok.split(",")
for (let index = 0; index <= 6; index++) {
    aktualis_nap = het_napjai[index]
    basic.showString("" + (aktualis_nap))
}
basic.forever(function () {
	
})
