music.setVolume(20)
while (true) {
    if (input.lightLevel() > 10) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.pewPew.play()
    } else {
        light.clear()
    }
    
}
