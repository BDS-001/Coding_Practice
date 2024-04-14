class Solution(object):
    def maxArea(self, height):
        start = 0
        end = len(height) - 1
        area = 0
        while start <= end:
            h = min(height[start], height[end])
            w = end - start
            area = max(h*w, area)

            if height[start] > height[end]:
                end -= 1
            else:
                start += 1
        return area