from setuptools import find_packages, setup
from subprocess import check_call

check_call(["npm", "run", "prod"])


setup(
    name="nbss",
    version="0.1",
    url="https://github.com/notebook-sharing-space/nbss",
    license="3-clause BSD",
    author="Yuvi Panda",
    author_email="yuvipanda@gmail.com",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "uvicorn[standard]",
        "fastapi",
        "python-multipart",
        "aiofiles",
        "gunicorn",
        "nbconvert",
        "ipython", # needed for the ipython lexer
        "lxml", # needed for cleaner cleaning
        "yarl",
        "aiohttp",
        "jupytext",
        "aiobotocore",
        "content-size-limit-asgi",
    ],
)
