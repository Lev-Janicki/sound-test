music.set_volume(20)
while True:
    if input.light_level() > 10:
        light.show_animation(light.rainbowAnimation, 500)
        music.pew_pew.play()
    else:
        light.clear()