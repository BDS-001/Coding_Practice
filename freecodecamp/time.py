def add_time(start, duration, s_day=''):
    # Get the data and convert into ints
    time, indicator = start.split()
    s_hours, s_min = time.split(':')
    d_hours, d_min = duration.split(':')
    days = 0
    try:
        d_hours = int(d_hours)
        d_min = int(d_min)
        s_hours = int(s_hours)
        s_min = int(s_min)
    except:
        return 'Error: not an int'
        
    # convert start time to 24 hour clock
    if indicator.lower() == 'pm':
        if s_hours != 12:
            s_hours += 12
    elif indicator.lower() == 'am':
        if s_hours == 12:
            s_hours = 0
    # if duration is greater than 24 then count the days
    while True:
        if d_hours >= 24:
            days += 1
            d_hours -= 24
        else:
            break

    #get the new time in 24 hour clock format
    new_min = s_min + d_min
    if new_min >= 60:
        d_hours += 1
        new_min -= 60

    new_hour = s_hours + d_hours
    if new_hour >= 24:
        days += 1
        new_hour -= 24

    #convert new time back into 12 hour format
    new_in = ''
    if new_hour == 0:
        new_hour = 12
        new_in = 'AM'
    elif new_hour == 12:
        new_in = 'PM'
    elif new_hour > 12:
        new_hour -= 12
        new_in = 'PM'
    else:
        new_in = 'AM'

    #convert to string
    new_hour = str(new_hour)
    if new_min < 10:
        new_min = f"0{str(new_min)}"
    else:
        new_min = str(new_min)

    #input data into new time
    if days > 1:
        new_time = f"{new_hour}:{new_min} {new_in} ({days} days later)"
    elif days == 1:
        new_time = f"{new_hour}:{new_min} {new_in} (next day)"
    else:
        new_time = f"{new_hour}:{new_min} {new_in}"



    return new_time