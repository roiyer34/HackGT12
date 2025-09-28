from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import csv
import os
from typing import List

app = FastAPI()

CSV_FILE_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/football.csv"))
SOCCER_CSV_FILE_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/soccer.csv"))

class FootballTeamStats(BaseModel):
    team: str
    quarterback: str
    passing_yards: int
    running_back: str
    rushing_yards: int
    wide_receiver: str
    receiving_yards: int
    turnovers: int
    penalties: int
    penalty_yards: int

class SoccerStats(BaseModel):
    team: str
    shots: int
    fouls: int
    yellow_cards: int
    red_cards: int
    corner_kicks: int
    saves: int

@app.get("/football/{line_number}", response_model=FootballTeamStats)
def get_football_data(line_number: int):
    try:
        with open(CSV_FILE_PATH, mode="r", newline="") as csvfile:
            reader = csv.reader(csvfile)
            rows = list(reader)

            if line_number < 1 or line_number > len(rows):
                raise HTTPException(status_code=404, detail=f"Line {line_number} not found. Available lines: 1-{len(rows)}")

            row = rows[line_number - 1]  # Convert to 0-based index

            team_stats = FootballTeamStats(
                team=row[0],
                quarterback=row[1],
                passing_yards=int(row[2]),
                running_back=row[3],
                rushing_yards=int(row[4]),
                wide_receiver=row[5],
                receiving_yards=int(row[6]),
                turnovers=int(row[7]),
                penalties=int(row[8]),
                penalty_yards=int(row[9]),
            )
            return team_stats
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="CSV file not found")
    except IndexError:
        raise HTTPException(status_code=400, detail="Invalid row format in CSV")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid numeric data in CSV")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/soccer/{line_number}", response_model=SoccerStats)
def get_soccer_data(line_number: int):
    try:
        with open(SOCCER_CSV_FILE_PATH, mode="r", newline="") as csvfile:
            reader = csv.reader(csvfile)
            rows = list(reader)

            if line_number < 1 or line_number > len(rows):
                raise HTTPException(status_code=404, detail=f"Line {line_number} not found. Available lines: 1-{len(rows)}")

            row = rows[line_number - 1]  # Convert to 0-based index

            soccer_stats = SoccerStats(
                team=row[0],
                shots=int(row[1]),
                fouls=int(row[2]),
                yellow_cards=int(row[3]),
                red_cards=int(row[4]),
                corner_kicks=int(row[5]),
                saves=int(row[6]),
            )
            return soccer_stats
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="CSV file not found")
    except IndexError:
        raise HTTPException(status_code=400, detail="Invalid row format in CSV")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid numeric data in CSV")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))