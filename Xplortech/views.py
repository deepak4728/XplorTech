from pathlib import Path

import pandas as pd
from django.conf import settings
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

EXCEL_PATH = Path(settings.BASE_DIR) / "data" / "scholarships.xlsx"


def _load_scholarships():
    if not EXCEL_PATH.exists():
        return []

    df = pd.read_excel(EXCEL_PATH).fillna("")
    scholarships = []

    for idx, row in df.iterrows():
        raw_requirements = str(row.get("requirements", "")).strip()
        requirements = [
            item.strip()
            for item in raw_requirements.split(";")
            if item.strip()
        ]

        scholarships.append({
            "id": int(row.get("id", idx + 1)),
            "icon": str(row.get("icon", "")),
            "title": str(row.get("title", "")),
            "deadline": str(row.get("deadline", "")),
            "requirements": requirements,
            "link": str(row.get("link", "")),
        })

    return scholarships

# Create your views here.
def index(request):
    return render(request, 'Xplortech/index.html')

@api_view(['GET'])
def api_home(request):
    return Response({
        'message': 'Welcome to Xplortech API',
        'status': 'active'
    })

@api_view(['GET'])
def api_scholarships(request):
    """Fetch all scholarships"""
    scholarships = _load_scholarships()
    return Response(scholarships, status=status.HTTP_200_OK)

@api_view(['GET'])
def api_scholarship_detail(request, pk):
    """Fetch single scholarship by ID"""
    scholarships = _load_scholarships()
    scholarship = next((item for item in scholarships if item["id"] == pk), None)

    if not scholarship:
        return Response({"detail": "Scholarship not found."}, status=status.HTTP_404_NOT_FOUND)

    return Response(scholarship, status=status.HTTP_200_OK)
