import os

def update_name(name):
    return name.strip().replace(' ', '_')

def rename_item(old_path, new_path):
    os.rename(old_path, new_path)
    print(f'Renamed: {old_path} -> {new_path}')
    print('-' * 50)

def main(path):
    if not os.path.exists(path):
        print(f"Path does not exist: {path}")
        return

    if not os.path.isdir(path):
        print(f"Path is not a directory: {path}")
        return

    for root, dirs, files in os.walk(path, topdown=False):
        # Rename files
        for file in files:
            name, ext = os.path.splitext(file)
            updated_name = update_name(name)
            if updated_name != name:
                old_file_path = os.path.join(root, file)
                new_file_path = os.path.join(root, updated_name + ext)
                rename_item(old_file_path, new_file_path)
            else:
                print(f'Skipped file: {file}')
                print('-' * 50)

        # Rename directories
        for dir in dirs:
            updated_dir = update_name(dir)
            if updated_dir != dir:
                old_dir_path = os.path.join(root, dir)
                new_dir_path = os.path.join(root, updated_dir)
                rename_item(old_dir_path, new_dir_path)
            else:
                print(f'Skipped directory: {dir}')
                print('-' * 50)

if __name__ == "__main__":
    path = './'
    main(path)