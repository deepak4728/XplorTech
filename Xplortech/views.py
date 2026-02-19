from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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
    scholarships = [
        {
            "id": 1,
            "icon": "https://via.placeholder.com/50?text=NSF",
            "title": "NSF Scholarship",
            "deadline": "Deadline: 30/04/2024",
            "requirements": [
                "Min. 60% marks in previous class",
                "no gender preference",
                "annual family income less than 3Lac.",
                "12th passed students"
            ],
            "link": "https://www.northsouth.org/public"
        },
        {
            "id": 2,
            "icon": "https://via.placeholder.com/50?text=NSF",
            "title": "NSF Scholarship",
            "deadline": "Deadline: 30/04/2024",
            "requirements": [
                "Min. 60% marks in previous class",
                "no gender preference",
                "annual family income less than 3Lac.",
                "12th passed students"
            ],
            "link": ""
        }
    ]
    return Response(scholarships, status=status.HTTP_200_OK)

@api_view(['GET'])
def api_scholarship_detail(request, pk):
    """Fetch single scholarship by ID"""
    scholarship = {
        "id": pk,
        "icon": "https://via.placeholder.com/50?text=NSF",
        "title": "NSF Scholarship",
        "deadline": "Deadline: 30/04/2024",
        "requirements": [
            "Min. 60% marks in previous class",
            "no gender preference",
            "annual family income less than 3Lac.",
            "12th passed students"
        ],
        "link": "https://www.northsouth.org/public"
    }
    return Response(scholarship, status=status.HTTP_200_OK)
