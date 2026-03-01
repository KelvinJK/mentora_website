from PIL import Image
import numpy as np

def remove_white_bg(path, threshold=240):
    img = Image.open(path).convert('RGBA')
    data = np.array(img)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    white_mask = (r > threshold) & (g > threshold) & (b > threshold)
    data[:,:,3] = np.where(white_mask, 0, a)
    Image.fromarray(data).save(path)
    print(f'Done: {path}')

base = r'c:\Users\kelvi\Downloads\inspire-stem-hub\public\images\icons'
remove_white_bg(base + r'\shield.png')
remove_white_bg(base + r'\puzzle.png')
print('All done!')
