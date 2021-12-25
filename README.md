# Advantch Django, React & Vite Starter

## Getting Started

### Installing Dependencies

#### Python 3.7

Follow instructions to install the latest version of python for your platform 
in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Environment

We recommend working within a virtual environment whenever using Python for projects. 
This keeps your dependencies for each project separate and organized. 

Instructions for setting up a virual enviornment for your platform can be found in
 the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

An example with MacOS and Python3

```bash
python3 -m venv .venv
source .venv/bin/activate
```
#### PIP Dependencies

Once you have your virtual environment setup, run the following to install the project requirements:

```bash
pip install -r requirements.txt
```

## Running the server

To run the server

```bash

python manage.py runserver
```

#### NPM & node installation

Follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Running the Vite dev server

To run the server

```bash

npm install
npm run dev
```

## Build your production assets


```bash
npm run build
```

## Testing
```bash
pytest

```


## Docker
```
npm run build
docker build -t django-react .
docker run -dp 8000:8000 django-react
```

## Nomad deployments
```
make buid
make deploy-to-hub
make deploy-to-nomad
```
