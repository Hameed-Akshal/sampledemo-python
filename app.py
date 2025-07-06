from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the root!"}

@app.get("/hello/{name}")
def hello_name(name: str):
    return {"message": f"Hello, {name}!"}

@app.post("/items/")
def create_item(item: dict):
    return {"received_item": item}

# Lambda handler
handler = Mangum(app)
