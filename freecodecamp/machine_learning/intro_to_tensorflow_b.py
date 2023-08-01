def main():
    import tensorflow as tf
    print(tf.version)

    t = tf.zeros([5,5,5,5])
    t = tf.reshape(t,[625])
    print(pow(5,4))


    print(t)

if __name__ == "__main__":
    main()