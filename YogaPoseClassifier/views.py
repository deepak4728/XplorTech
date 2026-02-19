from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

# HTML Template View
def index(request):
    return render(request, 'YogaPoseClassifier/index.html')

# API Home
@api_view(['GET'])
@permission_classes([AllowAny])
def api_home(request):
    return Response({
        'message': 'Welcome to Yoga Pose Classifier API',
        'status': 'active',
        'version': '1.0'
    })

# Get all yoga poses
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def api_get_poses(request):
    poses = [
        {
            "id": 1,
            "name": "Downward Dog",
            "description": "A foundational yoga pose",
            "difficulty": "Beginner",
            "benefits": ["Stretches hamstrings", "Strengthens arms"]
        },
        {
            "id": 2,
            "name": "Warrior I",
            "description": "A standing yoga pose",
            "difficulty": "Intermediate",
            "benefits": ["Builds strength", "Improves balance"]
        },
        {
            "id": 3,
            "name": "Tree Pose",
            "description": "Balance and focus pose",
            "difficulty": "Beginner",
            "benefits": ["Improves balance", "Calms mind"]
        }
    ]
    return Response(poses, status=status.HTTP_200_OK)

# Classify yoga pose (from image/video)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def api_classify_pose(request):
    """
    Classify yoga pose from uploaded image
    Expected: POST request with 'image' file
    """
    try:
        if 'image' not in request.FILES:
            return Response(
                {'error': 'No image provided'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        image = request.FILES['image']
        
        # TODO: Add ML model here to classify pose
        # For now, return mock response
        
        response_data = {
            'pose_detected': 'Downward Dog',
            'confidence': 0.95,
            'accuracy': '95%',
            'feedback': 'Good form! Keep your arms straight.',
            'tips': [
                'Spread fingers wide',
                'Press palms firmly',
                'Relax your neck'
            ]
        }
        
        return Response(response_data, status=status.HTTP_200_OK)
        
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
