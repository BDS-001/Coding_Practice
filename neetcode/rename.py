import os

def main(path):
    if os.path.exists(path):
        if os.path.isdir(path):
            for root, _, files in os.walk(path):
                if (files):
                    for file in files:
                        name, ext = os.path.splitext(file)
                        updated_name = name.strip().replace(' ', '-')
                        if (updated_name == file): 
                            continue
                        updated_filename = updated_name + ext
                        old_file_path = os.path.join(root, file)
                        new_file_path = os.path.join(root, updated_filename)
                        os.replace(old_file_path, new_file_path)
                        print('replaced ', old_file_path, ' with ', new_file_path)
                        print('-' * 50)
    else:
        print(f"Path does not exist: {path}")

if __name__ == "__main__":
    path = './neetcode'
    main(path)